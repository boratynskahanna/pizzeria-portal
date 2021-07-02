# Dashboard

- `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - listę rezerawcji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)

# Widok dostępność stolików

- `/tables`
    - wybór daty i godziny
    - tabela z listą rezerwacji oraz wydarzeń
        - kazda kolumna = 1 stolik
        - kazdy wiersz = 30 minut
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są rózne stoliki
        - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
    - zawiera wszystkie informacje dotyczące rezerwacji
    - umoliwia edycję i zapisanie zmian
- `/tables/booking/new`
    - analogicznie do powyzszej, bez początkowych informacji
- `/tables/events/:id`
    - analogicznie do powyzszej, dla eventów
- `/tables/events/new`
    - analogicznie do powyzszej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter`
    - tabela 
        - w wierszach stoliki 
        - w kolumnach rozne rodzaje informacji (status, czas od ostatniej aktywności)
        - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktów 
    - opcje wybranego produktu 
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwota zamówienia
- `/waiter/order/:id`
    - jak powyzsza

# Widok kuchni

- `/kitchen`
    - wyświetla listę zamówień w kolejności ich złozenia
    - lista musi zawierać:
        - numer stolika (lub zamówienia zdalnego)
        -  pełne informacje dotyczące zamówionych dań
    - na liście musi być mozliwość oznaczenia zamówienia jako zrezalizowanegoś