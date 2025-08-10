public class TestLogger {
    public static void main(String[] args) {
        Logger firstLogger = Logger.getInstance();
        firstLogger.log("Starting the application...");

        Logger secondLogger = Logger.getInstance();
        secondLogger.log("Application is running.");

        if (firstLogger == secondLogger) {
            System.out.println("Confirmed! Only one logger exists.");
        } else {
            System.out.println("Oops! More than one logger was created.");
        }
    }
}
