import MainPage from "./page/MainPage";
import {ThemeProvider} from "styled-components";
import {theme} from "./resource/style/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WeatherContainer from "./container/WeatherContainer";
import TodoListContainer from "./container/TodoListContainer";
import GlobalStyle from "./resource/style/GlobalStyle";
import DateExtension from './utils/DateFormat'

function App() {
  return (
      <>
          <GlobalStyle/>
          <ThemeProvider theme = {theme}>
              <BrowserRouter>
                  <Routes>
                      <Route path={`/`} element={<MainPage/>}>
                          <Route path={`/todos`} element={<TodoListContainer/>}/>
                          <Route path={`/weather`} element={<WeatherContainer/>}/>
                      </Route>
                  </Routes>
              </BrowserRouter>
          </ThemeProvider>
      </>
  );
}

export default App;
