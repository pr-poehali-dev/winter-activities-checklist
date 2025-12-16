import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface ChecklistItem {
  id: number;
  text: string;
  emoji: string;
  completed: boolean;
}

const Index = () => {
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: 1, text: 'Нарядим ёлку', emoji: '🎄', completed: false },
    { id: 2, text: 'Выпить какао в будний день', emoji: '☕', completed: false },
    { id: 3, text: 'Сделать новогоднюю поделку', emoji: '🎨', completed: false },
    { id: 4, text: 'Прочитать зимнюю историю', emoji: '📖', completed: false },
    { id: 5, text: 'Написать письмо Деду Морозу', emoji: '✉️', completed: false },
    { id: 6, text: 'Поиграть в снежки', emoji: '⚪', completed: false },
    { id: 7, text: 'Сделать кормушки для птиц', emoji: '🐦', completed: false },
    { id: 8, text: 'Покататься на санках', emoji: '🛷', completed: false },
    { id: 9, text: 'Катание с горки', emoji: '⛷️', completed: false },
    { id: 10, text: 'Выучить стих для Деда Мороза', emoji: '📝', completed: false },
    { id: 11, text: 'Спеть зимнюю песню', emoji: '🎵', completed: false },
    { id: 12, text: 'Вырезать снежинку из бумаги', emoji: '❄️', completed: false },
    { id: 13, text: 'Испечь печенье', emoji: '🍪', completed: false },
    { id: 14, text: 'Сделать снежного ангела', emoji: '👼', completed: false },
    { id: 15, text: 'Слепить снеговика', emoji: '⛄', completed: false },
  ]);

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const completedCount = items.filter(item => item.completed).length;
  const progressPercentage = (completedCount / items.length) * 100;

  const categories = {
    creative: items.filter(item => [1, 3, 7, 12, 13].includes(item.id)),
    active: items.filter(item => [6, 8, 9, 14, 15].includes(item.id)),
    cozy: items.filter(item => [2, 4, 5, 10, 11].includes(item.id)),
  };

  const getCategoryStats = (categoryItems: ChecklistItem[]) => {
    const completed = categoryItems.filter(item => item.completed).length;
    return Math.round((completed / categoryItems.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="snowflake text-4xl absolute animate-[fall_10s_linear_infinite]" style={{ left: '10%', animationDelay: '0s' }}>❄️</div>
        <div className="snowflake text-3xl absolute animate-[fall_12s_linear_infinite]" style={{ left: '25%', animationDelay: '2s' }}>❄️</div>
        <div className="snowflake text-5xl absolute animate-[fall_15s_linear_infinite]" style={{ left: '40%', animationDelay: '4s' }}>❄️</div>
        <div className="snowflake text-3xl absolute animate-[fall_11s_linear_infinite]" style={{ left: '60%', animationDelay: '1s' }}>❄️</div>
        <div className="snowflake text-4xl absolute animate-[fall_13s_linear_infinite]" style={{ left: '75%', animationDelay: '3s' }}>❄️</div>
        <div className="snowflake text-3xl absolute animate-[fall_14s_linear_infinite]" style={{ left: '90%', animationDelay: '5s' }}>❄️</div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Зимний Чек-Лист
          </h1>
          <p className="text-muted-foreground text-lg">15 семейных активностей для волшебной зимы</p>
        </div>

        <Card className="mb-6 p-6 bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Общий прогресс</h2>
              <p className="text-muted-foreground">Выполнено {completedCount} из {items.length} активностей</p>
            </div>
            <div className="text-5xl animate-pulse">
              {progressPercentage === 100 ? '🎉' : progressPercentage >= 50 ? '🌟' : '⭐'}
            </div>
          </div>
          <Progress value={progressPercentage} className="h-3 mb-4" />
          <div className="text-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {Math.round(progressPercentage)}%
            </span>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="p-5 bg-gradient-to-br from-pink-100 to-pink-50 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🎨</span>
              <h3 className="font-bold text-lg">Творческие</h3>
            </div>
            <div className="text-3xl font-bold text-purple-600">{getCategoryStats(categories.creative)}%</div>
            <p className="text-sm text-muted-foreground mt-1">
              {categories.creative.filter(i => i.completed).length} из {categories.creative.length}
            </p>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-blue-100 to-blue-50 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⛷️</span>
              <h3 className="font-bold text-lg">Активные</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600">{getCategoryStats(categories.active)}%</div>
            <p className="text-sm text-muted-foreground mt-1">
              {categories.active.filter(i => i.completed).length} из {categories.active.length}
            </p>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-amber-100 to-amber-50 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">☕</span>
              <h3 className="font-bold text-lg">Уютные</h3>
            </div>
            <div className="text-3xl font-bold text-orange-600">{getCategoryStats(categories.cozy)}%</div>
            <p className="text-sm text-muted-foreground mt-1">
              {categories.cozy.filter(i => i.completed).length} из {categories.cozy.length}
            </p>
          </Card>
        </div>

        <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-xl border-0">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>📋</span>
            Список активностей
          </h2>
          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`
                  flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                  ${item.completed 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200' 
                    : 'bg-gradient-to-r from-gray-50 to-slate-50 hover:from-blue-50 hover:to-purple-50 border-2 border-transparent hover:border-blue-200'
                  }
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Checkbox
                  id={`item-${item.id}`}
                  checked={item.completed}
                  onCheckedChange={() => toggleItem(item.id)}
                  className="w-6 h-6"
                />
                <label
                  htmlFor={`item-${item.id}`}
                  className="flex-1 flex items-center gap-3 cursor-pointer"
                >
                  <span className="text-3xl transition-transform hover:scale-125">{item.emoji}</span>
                  <span className={`text-lg font-medium ${item.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {item.text}
                  </span>
                </label>
                {item.completed && (
                  <Icon name="CheckCircle2" className="text-green-600 animate-scale-in" size={24} />
                )}
              </div>
            ))}
          </div>
        </Card>

        {progressPercentage === 100 && (
          <Card className="mt-6 p-8 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 border-0 shadow-xl text-center animate-scale-in">
            <div className="text-6xl mb-4">🎉🎊🎁</div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Поздравляем!
            </h2>
            <p className="text-lg text-foreground">
              Вы выполнили все зимние активности! Ваша семья создала незабываемые воспоминания! ⭐
            </p>
          </Card>
        )}
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
