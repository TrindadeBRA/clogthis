declare module 'clogthis' {
    // Definindo os tipos de mensagem que podem ser aceitos
    type LogMessage = string | number | any[] | Record<string, any>;

    function clogThis(message: LogMessage, color?: string): void;
    export = clogThis;
}
