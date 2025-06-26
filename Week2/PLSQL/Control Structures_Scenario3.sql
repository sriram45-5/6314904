BEGIN
  FOR rec IN (
    SELECT L.LoanID, L.EndDate, C.Name
    FROM Loans L
    JOIN Customers C ON L.CustomerID = C.CustomerID
    WHERE L.EndDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.LoanID || ' for ' || rec.Name || ' is due soon.');
  END LOOP;
END;
