import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('filteredArticles computed', () => {
  // Используем реалистичные данные
  const mockArticles = [
    { id: 1, title: 'Здоровая еда', category: 1 },
    { id: 2, title: 'Стейк-мастер', category: 2 },
    { id: 3, title: 'Смузи-рецепты', category: 1 },
  ];

  it('корректно фильтрует статьи по категориям', async () => {
    const { default: ArticlesSlide } = await import('@/components/Articles/ArticlesSlide.vue')
    const wrapper = mount(ArticlesSlide, { props: { articles: [...mockArticles] } } );
    
     // 1. Проверка без выбранной категории
    expect(wrapper.vm.filteredArticles).toEqual(mockArticles);

    // 2. Выбор категории 1
    await wrapper.setData({ 
      selectedCategory: {  id: 1,  icon: "🥦", title: "Здоровое питание" } 
    });
    
    // Проверка фильтрации
    expect(wrapper.vm.filteredArticles).toEqual([
      mockArticles[0],
      mockArticles[2]
    ]);

    // 3. Сброс категории
    await wrapper.setData({ selectedCategory: null });
    expect(wrapper.vm.filteredArticles).toEqual(mockArticles);
  });
});

describe('Header logout method', () => {

  it('корректно выполняет выход пользователя', async () => {
    const { default: Header } = await import('@/components/Layout/Header.vue')

    // 1. Подготовка тестовых данных
    const currentUser = { id: 1, name: 'Test User', email: 'test@example.com' };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('users', JSON.stringify([currentUser]));
    

    // 2. Монтируем компонент с начальным состоянием
    const wrapper = mount(Header, {
      data() {
        return { currentUser };
      },
      global: {
        mocks: {
          $route: {
            path: '/'
          }
        }
      }
    });

    // 3. Вызываем метод logout
    wrapper.vm.logout();

    // 4. Проверяем результаты
    // - currentUser должен стать null
    expect(wrapper.vm.currentUser).toBeNull();
    
    // - currentUser удален из localStorage
    expect(localStorage.getItem('currentUser')).toBeNull();
    
    // - users в localStorage обновлен
    const users = JSON.parse(localStorage.getItem('users'));
    expect(users).toEqual([currentUser]);
    
    // - isMenuOpen сброшен в false
    expect(wrapper.vm.isMenuOpen).toBe(false);
  });
});

describe('AccountView.vue', () => {
  it('displays login message when user is not authenticated', async () => {
    const { default: AccountView } = await import('@/components/Pages/AccountView.vue')
    // Монтируем компонент с переопределением данных
    const wrapper = mount(AccountView, {
      data() {
        return {
          userData: null, // Пользователь не авторизован
          likedRecipes: [],
          favoriteRecipes: [],
          likedArticles: [],
          favoriteArticles: []
        }
      },
      global: {
        stubs: ['ListItem', 'ArticleItem'] // Заглушки для дочерних компонентов
      }
    })

    // Проверяем отображение сообщения
    const message = wrapper.find('div.text-center')
    expect(message.exists()).toBe(true)
    expect(message.text()).toContain('Пользователь не найден')
    expect(message.text()).toContain('Пожалуйста, войдите в систему')
    
    // Проверяем, что основной контент профиля не отображается
    expect(wrapper.find('section').exists()).toBe(false)
  })
})