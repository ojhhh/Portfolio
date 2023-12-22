import { Wrapper, Heading } from '../components/common'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si'
import { AiOutlineBlock } from 'react-icons/ai'

const Skills = () => {
    return (
        <Wrapper>
            <Heading>기술 스택</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        언어
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiJavascript />
                                <span className="md:w-[120px]">Javascript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>변수를 사용할 줄 알며 var, let, const의 차이에 대해 설명 할 줄 암</li>
                                <li>콜 스택에 대해 이해함</li>
                                <li>이벤트 루프에 대해 이해함</li>
                                <li>런타임에 대해 이해함</li>
                                <li>블록, 함수, 레지컬 스코프에 차이에 대하 이해함</li>
                                <li>적절한 조건문을 사용하여 처리속도를 줄일 줄 암</li>
                                <li>forEach, Map, Reduce 차이에 대해 설명 할 줄 알고 사용할 줄 암</li>
                            </ul>
                        </li>

                        {/* <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiTypescript />
                                <span className="md:w-[120px]">Typescript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Typescript 세팅할줄암!!!!!!!!!!!</li>
                                <li>Console.log 잘찍음</li>
                                <li>연산자 사용할줄암!</li>
                                <li>조건문을 배움</li>
                                <li>배열 메서드를 능숙하게 다룸!</li>
                            </ul>
                        </li> */}
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        프론트 앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiReact />
                                <span className="md:w-[120px]">React</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>브라우저 랜더링 과정을 설명 할 수 있음</li>
                                <li>상태에 대해 설명 할 줄 암</li>
                                <li>CRA로 프로젝트 다수 생성 경험 보유!</li>
                                <li>CRA와 webpack 버전이 달라지면서 인식되지 않는 오류를 수정해본 경험이 있음</li>
                                <li>useState, useEffect 등 훅을 적절하게 사용할 줄 암</li>
                            </ul>
                        </li>
                        {/* 
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiNextdotjs />
                                <span className="md:w-[120px]">NextJS</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Client Component 암!</li>
                                <li>동적라우팅 사용해봄!</li>
                                <li>interface 배우는중!</li>
                                <li>any 잘씀!</li>
                            </ul>
                        </li> */}
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        백앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiNodedotjs />
                                <span className="md:w-[120px]">NodeJS</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>RestFul API 스럽게 할라고 노력함!</li>
                                <li>MVC 패턴을 프로젝트에 적용할 줄 암</li>
                                <li>JWT를 활용하여 회원 정보를 관리 할 수 있음</li>
                                <li>socket에 대해 이해함</li>
                                <li>Sequelize를 다룰 줄 암</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        블록체인
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <AiOutlineBlock />
                                <span className="md:w-[120px]">Solidity</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Openzeppelin을 사용하여 ERC20, ERC721을 사용할 줄 암</li>
                                <li>fallback method를 사용할 줄 암</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Skills
