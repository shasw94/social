import { faBagShopping, faDatabase, faDesktop, faHeart, faImages, faMedal, faMessage, faRectangleList, faStar, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { NavBar } from '@/components/navigation/navbar'
import { SideBar, SidebarItem } from '@/components/sidebar/sidebar'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import monitor from '../assets/monitor.png';
import Image from 'next/image'
import CardUser from '@/components/ui/card-user'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import NewsFeedCard from '@/components/ui/news-feed-card'

export default function Home() {
  return (
    <div className='font-sans'>
      <NavBar />
      <div className='flex'>
        <SideBar>
          <SidebarItem icon={faDesktop} text="Dashboard" alert active={true} />
          <SidebarItem icon={faUser} text="Dashboard" alert active={false} />
          <SidebarItem icon={faUsers} text="Dashboard" alert active={false} />
          <SidebarItem icon={faMedal} text="Dashboard" alert active={false} />
          <SidebarItem icon={faStar} text="Dashboard" alert active={false} />
          <SidebarItem icon={faDatabase} text="Dashboard" alert active={false} />
          <SidebarItem icon={faRectangleList} text="Dashboard" alert active={false} />
          <SidebarItem icon={faMessage} text="Dashboard" alert active={false} />
          <SidebarItem icon={faBagShopping} text="Dashboard" alert active={false} />
          <SidebarItem icon={faImages} text="Dashboard" alert active={false} />
        </SideBar>
        <div className='flex w-full justify-center'>
          <div className='w-full md:w-9/12'>
            <Card className="mx-auto w-full mt-8 h-fit flex bg-gradient-to-r from-bl from-10% to-skybl relative">
              <div className='absolute w-1/6 flex justify-end top-[-10px] left-[10px]'>
                <div className='rounded-full bg-[#FF2F59] w-10 h-10 flex items-center justify-center z-10 l-20'>
                  <FontAwesomeIcon icon={faHeart} color='white' />
                </div>
              </div>
              <div className='w-1/6'>
                <Image src={monitor} alt='Monitor Image' className='' style={{ objectFit: 'cover' }} />
              </div>
              <div className='flex items-center text-white my-4 md:my-8 md:right-[160px]'>
                <CardContent>
                  <CardTitle>Newsfeed</CardTitle>
                  <CardDescription className='text-white'>Check what your friends have been up to!</CardDescription>
                </CardContent>
              </div>
            </Card>
            <div className="w-full flex flex-col md:flex-row justify-between">
              <CardUser />
              <div className='w-full md:w-6/12 my-4 h-fit'>
                <Card className='w-full h-full'>
                  <CardContent className='flex items-center justify-between pb-0'>
                    <CardDescription className='flex justify-between items-center w-full h-full mt-4 text-black'>
                      <div className="text h-full pb-4 border-b-4 border-[#09D0DE] text-bold">
                        All Updates
                      </div>
                      <div className="mb-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger>Show Everything</DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Show 1</DropdownMenuItem>
                            <DropdownMenuItem>Featured</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardDescription>
                  </CardContent>
                </Card>
                <NewsFeedCard />
                <NewsFeedCard />
                <NewsFeedCard />
              </div>
              <CardUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

