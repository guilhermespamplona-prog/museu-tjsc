import { cn } from "@/lib/utils";
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
        <div className="flex min-h-screen items-center justify-center bg-background p-8" role="alert">
          <div className="flex flex-col items-center w-full max-w-2xl p-8">
            <AlertTriangle
              size={48}
              className="text-destructive mb-6 flex-shrink-0"
            />

            <h2 className="mb-4 text-center font-display text-xl text-[#1f1e1c]">Não foi possível carregar esta página.</h2>
            <p className="mb-6 max-w-lg text-center font-body text-sm leading-relaxed text-[#635b52]">
              Recarregue a página. Se o problema continuar, informe a equipe responsável pelo conteúdo.
            </p>

            {showErrorDetails ? (
              <div className="mb-6 w-full overflow-auto rounded bg-muted p-4">
                <pre className="whitespace-break-spaces text-sm text-muted-foreground">
                  {this.state.error?.stack}
                </pre>
              </div>
            ) : null}

            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg",
                "bg-primary text-primary-foreground",
                "hover:opacity-90 cursor-pointer"
              )}
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
