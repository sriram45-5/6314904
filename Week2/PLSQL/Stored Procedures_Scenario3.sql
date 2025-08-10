CREATE OR REPLACE PROCEDURE TransferFunds(
  from_acc IN NUMBER,
  to_acc IN NUMBER,
  amount IN NUMBER
) AS
  from_balance NUMBER;
BEGIN
  -- Get balance of source account
  SELECT Balance INTO from_balance
  FROM Accounts
  WHERE AccountID = from_acc
  FOR UPDATE;

  -- Check for sufficient balance
  IF from_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
  END IF;

  
  UPDATE Accounts
  SET Balance = Balance - amount,
      LastModified = SYSDATE
  WHERE AccountID = from_acc;

 
  UPDATE Accounts
  SET Balance = Balance + amount,
      LastModified = SYSDATE
  WHERE AccountID = to_acc;

  DBMS_OUTPUT.PUT_LINE('Transferred ₹' || amount || ' from Account ' || from_acc || ' to Account ' || to_acc);
END;
/
