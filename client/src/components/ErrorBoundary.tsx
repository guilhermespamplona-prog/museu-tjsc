import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

const showErrorDetails = import.meta.env.DEV;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[#fbfaf7] p-8" role="alert">
          <div className="flex w-full max-w-2xl flex-col items-center p-8">
            <AlertTriangle
              size={48}
              className="mb-6 flex-shrink-0 text-[#8b1d2c]"
            />

            <h2 className="mb-4 text-center font-display text-xl text-[#1f1e1c]">Não foi possível carregar esta página.</h2>
            <p className="mb-6 max-w-lg text-center font-body text-sm leading-relaxed text-[#635b52]">
              Recarregue a página. Se o problema continuar, informe a equipe responsável pelo conteúdo.
            </p>

            {showErrorDetails ? (
              <div className="mb-6 w-full overflow-auto rounded bg-[#f2efe8] p-4">
                <pre className="whitespace-break-spaces text-sm text-[#635b52]">
                  {this.state.error?.stack}
                </pre>
              </div>
            ) : null}

            <button
              onClick={() => window.location.reload()}
              className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#8b1d2c] px-4 py-2 text-white hover:opacity-90"
            >
              <RotateCcw size={16} />
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
