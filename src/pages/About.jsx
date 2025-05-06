import Header from '../components/layout/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="p-4">
        <h1 className="text-xl font-bold mb-2">About ページ</h1>
        <p>このアプリは React と Tailwind CSS を使って作られています。</p>
      </main>
    </div>
  );
}
