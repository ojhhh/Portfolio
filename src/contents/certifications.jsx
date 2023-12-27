import { Wrapper, Heading } from '../components/common'

const Certifications = () => {
    return (
        <Wrapper>
            <Heading>자격증</Heading>
            <ul className="flex flex-col gap-[16px] text-[16px] pb-[16px] pl-[16px] font-medium w-full items-start">
                <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                    <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[20px] ">
                        <li>정보처리기사</li>
                    </ul>
                </li>
            </ul>
            <ul className="flex flex-col gap-[16px] text-[16px] pb-[16px] pl-[16px] font-medium w-full items-start">
                <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                    <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[20px] ">
                        <li>SQLD</li>
                    </ul>
                </li>
            </ul>
            <ul className="flex flex-col gap-[16px] text-[16px] pb-[16px] pl-[16px] font-medium w-full items-start">
                <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                    <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[20px] ">
                        <li>네트워크 관리사 2급</li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Certifications
