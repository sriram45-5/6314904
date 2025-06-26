BEGIN
  FOR rec IN (
    SELECT L.LoanID, L.InterestRate, C.DOB 
    FROM Loans L
    JOIN Customers C ON L.CustomerID = C.CustomerID
  ) LOOP
    IF MONTHS_BETWEEN(SYSDATE, rec.DOB) / 12 > 60 THEN
      UPDATE Loans
      SET InterestRate = rec.InterestRate - (rec.InterestRate * 0.01)
      WHERE LoanID = rec.LoanID;

      DBMS_OUTPUT.PUT_LINE('Discount applied to Loan ID: ' || rec.LoanID);
    END IF;
  END LOOP;
END;
