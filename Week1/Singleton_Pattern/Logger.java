public class Logger {
    private static Logger singleLoggerInstance;
    private Logger() {
        System.out.println("Logger is ready to log messages!");
    }

    public static Logger getInstance() {
        if (singleLoggerInstance == null) {
            singleLoggerInstance = new Logger();
        }
        return singleLoggerInstance;
    }
    
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}
