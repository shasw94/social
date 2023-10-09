"use client"
import { Card, CardContent, CardDescription } from './card'

const NewsFeedCard = () => {
    return (
        <Card className='w-full h-full my-4'>
            <CardContent className='flex items-center justify-between'>
                <CardDescription className='py-4'>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 leading-loose dark:text-white ">
                                Neil Sims <span className='p-2 bg-bl rounded text-white rounded-full'> Pro Member</span> replied to the topic <b>Welcome to the Cosplayers Group Forum!</b> in the Forum <b>Cosplayers Group Forum</b>
                            </p>
                            <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                                1 year ago
                            </p>
                        </div>
                    </div>
                    <div className='pt-4 border-b-2 pb-4 border-[#EBEBF4]'>
                        <div>Hello Everyone!</div>
                    </div>
                    <div className='w-full flex justify-between mt-4'>
                        <div>😆</div>
                        <div className='flex jutify-between text-black font-medium'>
                            <div className="comments pr-4">
                                0 Comments
                            </div>
                            <div className="shares">
                                0 Shares
                            </div>
                        </div>
                    </div>
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default NewsFeedCard