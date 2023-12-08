import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Introduce = () => {
    const { animatedElementRef, isVisible } = useIntersectionObserver(0.7)

    return (
        <div
            ref={animatedElementRef}
            className={`w-full flex pt-[32px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="flex flex-col gap-[16px] w-full items-center">
                <RiDoubleQuotesL />
                <div className="text-center text-[16px] md:text-[24px]">
                    <p>뽑아줘 제발</p>
                    <p>돈벌고 싶어</p>
                </div>
                <RiDoubleQuotesR />
            </div>
        </div>
    )
}

export default Introduce
