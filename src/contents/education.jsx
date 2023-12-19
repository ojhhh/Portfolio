import { Wrapper, Heading } from '../components/common'

const Education = () => {
    return (
        <Wrapper>
            <Heading>교육</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[50%] basisc-[25%]">
                        블록체인 기반 핀테크 및 응용 SW 개발자 양성 과정
                    </h3>
                    <span></span>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>[ 웹 프로그래밍 기초 ] : HTML, CSS, Javascript</li>
                                <li>[ 백엔드 ] : Node.js, Typescript</li>
                                <li>[ 프론트엔드 ] : React</li>
                                <li>[ 데이터베이스 ] : MySQL</li>
                                <li>[ 블록체인 ] : Solidity</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[50%] basisc-[25%]">
                        AWS를 활용한 클라우드 응용 SW 개발자 양성
                    </h3>
                    <span></span>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>[ 웹 프로그래밍 기초 ] : HTML, CSS, jQuery</li>
                                <li>[ 백엔드 ] : Java, Java Spring</li>
                                <li>[ 프론트엔드 ] : JSP</li>
                                <li>[ 데이터베이스 ] : Oracle</li>
                                <li>[ ETC ] : AWS EC2, AWS lambda, AWS DynamoDB</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[50%] basisc-[25%]">
                        ICT기반 정보시스템보안엔지니어 양성
                    </h3>
                    <span></span>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>[ 웹 프로그래밍 기초 ] : PHP</li>
                                <li>[ 네트워크 ] : switch, router, cisco</li>
                                <li>[ 서버 ] : window server, centos, </li>
                                <li>[ 데이터베이스 ] : MySQL</li>
                                <li>[ 블록체인 ] : Solidity</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Education
