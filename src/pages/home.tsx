import Search from '../components/Search';

export default function Home() {
  return (
    <main className=' fixed w-full h-full pt-20 md:px-5 bg-[#CAE9FF] '>
      <header className=' flex flex-col justify-center items-center w-full mb-5 gap-3 text-[1.25rem] lg:text-[2.125rem] font-bold'>
        <h2 className='m-auto'>국내 모든 임상시험 검색하고</h2>
        <h2> 온라인으로 참여하기</h2>
      </header>
      <div className=' w-full max-sm:focus-within:absolute md:focus-within:top-0 focus-within:right-0  flex bottom-0 justify-center focus-within:bg-white h-full md:h-fit'>
        <Search />
      </div>
    </main>
  );
}
