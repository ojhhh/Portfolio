import { Wrapper, Heading } from '../components/common'

const Certifications = () => {
    return (
        <Wrapper>
            <Heading>자격증</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[50%] basisc-[25%]">
                        정보처리기사
                    </h3>
                    <span></span>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>2023.09</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[50%] basisc-[25%]">
                        SQLD
                    </h3>
                    <span></span>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>2023.06</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[50%] basisc-[25%]">
                        네트워크 관리사 2급
                    </h3>
                    <span></span>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>2017.06</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Certifications
