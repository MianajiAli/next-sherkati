import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function Product() {
    return (
        <Popover className="relative ">
            <PopoverButton>محصولات</PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col bg-secondary text-secondary m-0 focus:outline-none border-0">
                <a href="/analytics" className='py-3 px-5'>Analytics</a>
                <a href="/engagement" className='py-3 px-5'>Engagement</a>
                <a href="/security" className='py-3 px-5'>Security</a>
                <a href="/integrations" className='py-3 px-5'>Integrations</a>
            </PopoverPanel>
        </Popover>
    )
}