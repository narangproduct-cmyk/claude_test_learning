import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">🎓 영어 문제 생성 플랫폼</h1>
          <nav className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">로그인</Link>
            <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">무료 시작</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold mb-6">
            AI로 30초 만에<br />
            <span className="text-blue-600">수능 영어 문제 생성</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">고등부 영어 강사를 위한 완벽한 솔루션</p>
          <Link href="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 inline-block">
            첫 50문제 무료 생성
          </Link>
        </section>
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">주요 기능</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold mb-2">빠른 문제 생성</h4>
                <p className="text-gray-600">30초 안에 고품질 문제 5개 자동 생성</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-xl font-bold mb-2">개인 문제은행</h4>
                <p className="text-gray-600">생성한 문제를 자동 저장하고 관리</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-xl font-bold mb-2">학생 관리</h4>
                <p className="text-gray-600">성적 추적과 취약점 분석</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 영어 문제 생성 플랫폼</p>
        </div>
      </footer>
    </div>
  );
}
