import { createContext, useContext, useState } from "react";
// Trong thực tế thì anh em có thư viện hỗ trợ nhưng này rảnh quá làm vui vui
// Tạo thành các component riêng nhé đừng ghi hết vào 1 file như này

const ThemeContext = createContext({})
const LanguageContext = createContext({})
const AuthContext = createContext({})

type TChidlren = {
    children: React.ReactNode
}
function ThemeProvider({ children }: TChidlren) {
    const [theme, setTheme] = useState<string>('light')
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
function LanguageProvider({ children }: TChidlren) {
    const [language, setLanguage] = useState<string>('vn')
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
function AuthProvider({ children }: TChidlren) {
    const [auth, setAuth] = useState(true)
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
function ChildrenComponent() {

    const { theme, setTheme } = useContext(ThemeContext)
    const { language, setLanguage } = useContext(LanguageContext)
    const { auth } = useContext(AuthContext)

    const texts = {
        vn: {
            currentTheme: "Theme hiện tại",
            currentLang: "Ngôn ngữ hiện tại",
            authStatus: auth ? "Đã đăng nhập" : "Chưa đăng nhập",
            toggleTheme: "Đổi theme",
            toggleLang: "Đổi ngôn ngữ",
            toggleAuth: auth ? "Đăng xuất" : "Đăng nhập",
        },
        en: {
            currentTheme: "Current theme",
            currentLang: "Current language",
            authStatus: auth ? "Logged in" : "Logged out",
            toggleTheme: "Change theme",
            toggleLang: "Change language",
            toggleAuth: auth ? "Logout" : "Login",
        },
    };
    const t = texts[language]
    return (
        <div style={{ backgroundColor: '' }}>
            <h2> {t.currentTheme}: {theme}</h2>
            <h2> {t.currentLang}: {language}</h2>
            <h2> {t.authStatus}: {!auth ? `${t.toggleAuth}` : `${t.toggleAuth}`}</h2>

            <button onClick={() => setTheme(theme === 'light' ? 'dark' : "light")}>{theme === 'light' ? 'dark' : "light"}</button>
            <button onClick={() => setLanguage(language === 'vn' ? 'en' : "vn")}>{language === 'vn' ? 'en' : "vn"}</button>
        </div>
    )
}
const App = () => {

    return (
        <>
            <ThemeProvider>
                <LanguageProvider>
                    <AuthProvider>
                        <ChildrenComponent />
                    </AuthProvider>
                </LanguageProvider>
            </ThemeProvider>
        </>
    )
};

export default App;

