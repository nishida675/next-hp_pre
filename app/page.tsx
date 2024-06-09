const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <br />
      <div className="text-center text-white bg-black rounded-lg shadow-md p-4">
        <div className="text-5xl">開発記録</div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="border-t border-gray-900" style={{ width: '10%' }}></div>
        <div className="px-4 text-center">
          The Purpose
        </div>
        <div className="border-t border-gray-900" style={{ width: '10%' }}></div>
      </div>
      <div className="text-center">
        いままで勉強してきた記録です。<br />
        アプリなどの制作物や技術まとめを投稿していきます。<br />
        日記も載せるかも？
      </div>
    </div>
  )
}

export default Home