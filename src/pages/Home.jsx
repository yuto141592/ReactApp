import { useState } from 'react';
import Header from '../components/layout/Header';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />

      <main className="p-4">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="mb-4">
            <CardContent>
              <h2 className="text-lg font-semibold mb-2">カード {item}</h2>
              <p className="text-sm">これはモバイル向けのサンプルカードです。</p>
              <Button onClick={() => setShowModal(true)} className="mt-2">
                詳細を見る
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-11/12 max-w-sm">
            <h3 className="text-lg font-bold mb-4">詳細モーダル</h3>
            <p className="text-sm mb-4">ここに詳細情報を表示します。</p>
            <Button onClick={() => setShowModal(false)}>閉じる</Button>
          </div>
        </div>
      )}
    </div>
  );
}
