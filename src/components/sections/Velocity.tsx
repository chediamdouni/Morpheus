import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocity() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
            <VelocityScroll className="font-light my-20 text-[#05141D]">la Méditerranée réinventée par la mode</VelocityScroll>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 "></div>
        </div>
    );
}
