import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'

export default function Product() {
    return (
        <Popover className="relative ">
            <PopoverButton>Products</PopoverButton>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <PopoverPanel anchor="bottom" className="flex flex-col bg-secondary text-back2 rounded-md font-bold m-0 focus:outline-none border-0">
                    <a href="/analytics" className='py-3 px-5'>Analytics</a>
                    <a href="/engagement" className='py-3 px-5'>Engagement</a>
                    <a href="/security" className='py-3 px-5'>Security</a>
                    <a href="/integrations" className='py-3 px-5'>Integrations</a>
                </PopoverPanel>
            </Transition>
        </Popover>
    )
}