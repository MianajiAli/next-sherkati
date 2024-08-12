import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function Product() {
    return (
        <Popover className="relative ">
            <PopoverButton>محصولات</PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col bg-slate-200 margin: 0px;">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
            </PopoverPanel>
        </Popover>
    )
}