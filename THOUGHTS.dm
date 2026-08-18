
### 2026-08-18, 14:23 - Problem z przyciskiem w Hero

# Myśli podczas tworzenia strony

## Spis treści
1. [Decyzje architektoniczne](#-decyzje-architektoniczne)
2. [Problemy i rozwiązania](#-problemy-i-rozwiązania)
3. [Przyszłe usprawnienia](#-rzeczy-które-chciałabym-dodać-w-przyszłości)
4. [Czego się nauczyłam](#-czego-się-nauczyłam-przy-tym-projekcie)

---
...


#   Myśli podczas tworzenia strony dla fryzjerki

## 📐 Decyzje architektoniczne

### Dlaczego SPA zamiast React Router?
[tu opis]

### Dlaczego dane w osobnych plikach?
[tu opis]

### Dlaczego wybrałam takie kolory?
[tu opis]

---

## 🐛 Problemy i rozwiązania

### Problem 1: Hamburger nie zamykał się po kliknięciu
**Objaw:** Po kliknięciu w link w menu mobilnym, strona przewijała się do sekcji, ale menu pozostawało otwarte.

**Rozwiązanie:** Dodałam `setIsOpen(false)` w funkcji `handleLinkClick`, która jest wywoływana przy każdym kliknięciu w link.

**Co bym zrobiła inaczej:** Użyłabym `useEffect` do nasłuchiwania zmiany URL, ale w SPA z kotwicami to nie miało sensu.

---

### Problem 2: Obrazki w galerii rozjeżdżały się na małych ekranach
**Objaw:** Na iPhone 12 zdjęcia wychodziły poza kontener.

**Rozwiązanie:** Dodałam `object-fit: cover` i ustaliłam stałą wysokość dla wszystkich zdjęć w galerii.

---

## 💡 Rzeczy, które chciałabym dodać w przyszłości

- Podpiąć prawdziwy formularz kontaktowy (np. EmailJS)
- Dodać animacje przy przewijaniu (np. fade-in)
- Zrobić wersję językową PL/EN

---

## 📚 Czego się nauczyłam przy tym projekcie

- Jak działa `scrollIntoView` z `behavior: smooth`
- Że `key` w `map()` nie powinien być indeksem, jeśli lista może się zmieniać
- Jak zrobić hamburger menu bez zewnętrznych bibliotek