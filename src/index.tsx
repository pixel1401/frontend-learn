import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LangProvider, ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundry';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18/i18';
import App from './app/App';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <LangProvider>
                    <App />
                </LangProvider>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
