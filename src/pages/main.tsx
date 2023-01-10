import Search from '../components/SearchManager';

export default function Main() {
  return (
    <div className=' fixed w-full h-full pt-20 md:px-5 bg-[#CAE9FF]'>
      <div className=' flex flex-col justify-center items-center w-full mb-5 gap-3 text-[1.25rem] lg:text-[2.125rem] font-bold'>
        <h2 className='m-auto'>국내 모든 임상시험 검색하고</h2>
        <h2> 온라인으로 참여하기</h2>
      </div>
      <div className='flex justify-center h-full md:h-fit'>
        <Search />
      </div>
    </div>
  );
}
