public class FinancialForecast{

    public static double forecastValue(double initialAmount, double rate, int years) {
        if (years ==0){
            return initialAmount; // Base case
        }
        return forecastValue(initialAmount, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args){
        double initial =10000;       
        double annualRate =0.08;
        int years =5;

        double futureValue =forecastValue(initial, annualRate, years);
        System.out.printf("Future Value after %d years: %.2f\n", years, futureValue);
    }
}
