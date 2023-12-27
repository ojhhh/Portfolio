import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import {
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiAmazonec2,
    SiAmazons3,
    SiHtml5,
    SiMysql,
} from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { DiTrello } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import { BiLogoPostgresql } from 'react-icons/bi'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()

    return (
        <Wrapper>
            <Heading>프로젝트</Heading>
            <ul className="flex flex-col w-full gap-[120px]">
                {/* 부동산 STO 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src="./sto.png" className="w-full" alt="어떤어떤 프로젝트" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023. 11. 01 ~ 2023. 12. 05</li>
                            <li>back-end, blockchain</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            부동산 STO (기업 협약 프로젝트){' '}
                            <a href="https://github.com/ojhhh/Project/tree/main/Stack_blockchain/sto">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            실제 블록체인 사업을 하고 있는 업체와 협약하여 진행한 프로젝트로 현물 부동산을
                            조각지분화하여 사고 팔수 있고 가지고 있는 지분만큼 배당금을 받을 수도 있으며 투표권을 행사
                            할 수 있습니다.
                        </p>
                        {/* <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            사용자 페이지는 React를 사용하여 웹/앱의 형태로 구현하였으며 지갑은 메타마스크를
                            사용하였습니다.
                        </p>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            backend는 Node.js를 사용하였으며 관리자 페이지의 경우에는 Next.js를 사용하여 구현
                            하였습니다.
                        </p>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            블록체인은 solidity를 사용하여 컨트랙트를 생성 배포 하여 토큰 발행, 투표 등록 및 투표 기능을
                            구현 하였으며 web3.js를 활용하여 트랜잭션을 추적하였습니다.
                        </p> */}

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiJavascript />
                            <SiTypescript />
                            <IoLogoNodejs />
                            <SiNextdotjs />
                            <DiReact />
                            <BiLogoPostgresql />
                            <SiTailwindcss />
                            <SiAmazonec2 />
                            <SiAmazons3 />
                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>청약 페이지 및 청약 신청 기능 구현</li>
                            <li>
                                마이페이지 지갑과 연동하기, 입출금 내역, 총 자산 정보 데이터 가공하여 보내주는 기능 구현{' '}
                            </li>
                            <li>
                                내가 청약한 매물에 대한 정보 및 보유하고 있는 조각지분에 대한 배당금 정보를 보여주는
                                기능 구현
                            </li>
                            <li>
                                토큰의 흐름을 추적하기 위해 마지막 블록의 트랜잭션을 지속적으로 검사하여 내부에서 외부
                                전송인지 외부에서 내부로 들어오는 건지 어떤 지갑에게 전송되는지에 대한 내용을
                                데이터베이스에 저장하고 어드민 페이지에서 리스트로 표출
                            </li>
                            <li>어드민 대시보드 매물별 거래량을 일별, 주간별, 월별로 통계내서 보여주는 기능 구현</li>
                            <li>한달의 거래량을 취합하여 이번달 발생 수익이 얼마인지 보여주는 기능 구현</li>
                            <li>회원가입한 사람의 추이를 볼 수 있는 일별 회원가입자 수를 보여주는 기능 구현</li>
                            <li>데이터베이스 설계 및 구축</li>
                        </ul>
                    </div>
                </li>

                {/* React 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ46OGp74qW6aKXJJYfhbfYniV48BQIVpWHUpDZMzzbg&s"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 08. 03 ~ 2023. 08. 28</li>
                            <li>back-end, front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            IKE (customApparel){' '}
                            <a href="https://github.com/ojhhh/Project/tree/main/Stack_react/customApparel">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            옷을 커스텀하여 구매할 수 있는 사이트로 제공되는 데칼이나 텍스트 등을 이용해 티, 셔츠,
                            후드를 커스텀할 수 있으며 자신이 첨부한 이미지를 프린팅 할 수도 있습니다.
                        </p>
                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            커스텀한 옷을 입고 찍은 사진을 올릴 수도 있는 게시판도 존재하여 여러 사람들과 공유 할 수
                            있습니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiJavascript />
                            <IoLogoNodejs />
                            <DiReact />
                            <SiMysql />
                            <DiGithubBadge />
                            <SiAmazonec2 />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>custom 페이지 팝업 기능, 색 파렛트 등 우측 버튼 레이아웃 및 기능 구현</li>
                            <li>커스텀한 옷의 이미지를 다운 받는 기능 구현</li>
                            <li>관리자 페이지 전체 유저, 미승인 유저, 승인 유저 별로 정렬하여 보여주는 기능 구현</li>
                            <li>사진이 많은 순서대로 정렬하여 보여주는 해시태그 기능 구현</li>
                            <li>aws ec2를 통한 서비스 배포</li>
                            <li>데이터베이스 설계 및 구축</li>
                        </ul>
                    </div>
                </li>

                {/* Node 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ46OGp74qW6aKXJJYfhbfYniV48BQIVpWHUpDZMzzbg&s"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (3명)</li>
                            <li className="text-stone-500">2023. 06. 01 ~ 2023. 06. 27</li>
                            <li>back-end, front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            나작작 (나만의 작은 작가){' '}
                            <a href="https://github.com/ojhhh/Project/tree/main/Stack_react/customApparel">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            나작작은 나만의 작은 작가라는 뜻으로 여러 작가들이 자신의 책을 등록하면 사용자들이 등록한
                            책을 구매하여 읽고 리뷰를 남기거나 책에 대한 평점을 매겨 추천할 수 있는 사이트입니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiHtml5 />
                            <SiJavascript />
                            <IoLogoNodejs />
                            <SiMysql />
                            <DiGithubBadge />
                            <SiAmazonec2 />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>메인 레이아웃 및 별점순, 조회수 순으로 상위 5개씩 보여주는 기능 구현</li>
                            <li>
                                글 상세 페이지 댓글 및 대댓글 기능, 댓글을 작성할때 별점을 주는 기능 및 검증 기능,
                                별점을 부여하면 실시간으로 반영되는 기능 구현
                            </li>
                            <li>사용자와 실시간으로 채팅이 가능한 고객센터 기능 구현</li>
                            <li>카카오 결제 API를 이용한 결제 기능 구현 </li>
                            <li>데이터베이스 설계 및 구축</li>
                        </ul>
                    </div>
                </li>

                {/* Javascript 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ46OGp74qW6aKXJJYfhbfYniV48BQIVpWHUpDZMzzbg&s"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 04. 10 ~ 2023. 04. 25</li>
                            <li>back-end, front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            MW (AWA 웹사이트 클론){' '}
                            <a href="https://github.com/ojhhh/Project/tree/main/Stack_javascript/webclone_AWA">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            Accidentally Wes Anderson 웹사이트 클론 코딩한 프로젝트로 Javascript와 반응형 css에 대한
                            연습을 하기 위한 프로젝트입니다.{' '}
                        </p>
                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            특징으로는 데이터베이스가 없기 때문에 브라우저에 localstorage에 데이터를 저장하여
                            구현하였습니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiHtml5 />
                            <SiJavascript />
                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>이미지 미리보기 및 이미지를 서버에 저장하는 기능 구현</li>
                            <li>회원 정보 수정 및 회원 탈퇴 기능 구현</li>
                            <li>마이페이지에서 내가 등록한 이미지를 보여주는 기능 구현</li>
                            <li>
                                Collection, Collist, Stories 이미지 보여주는 기능 구현 및 페이지 전체 레이아웃 구현{' '}
                            </li>
                            <li>사진등록 페이지 전체 레이아웃 구현</li>
                        </ul>
                    </div>
                </li>
            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                아무것도 없쥬?
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                유튜브에 있는 영상 보여주기
            </Modal>
        </Wrapper>
    )
}

export default Projects
