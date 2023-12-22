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
                </li>
            </ul>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[50%] basisc-[25%]">
                        SQLD
                    </h3>
                </li>
            </ul>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[50%] basisc-[25%]">
                        네트워크 관리사 2급
                    </h3>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Certifications
