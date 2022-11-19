-- CREATE DATABASE bank_app;
USE bank_app;

-- CREATE TABLE transactions(
--     transaction_id INTEGER PRIMARY KEY AUTO_INCREMENT,
--     transaction_type VARCHAR(255),
--     product VARCHAR(255),
--     category VARCHAR(255),
--     vendor VARCHAR(255),
--     num_items INTEGER,
--     amount FLOAT
-- );

-- INSERT INTO transactions (transaction_type, amount)
-- VALUES("deposit", 14);

-- INSERT INTO transactions (transaction_type, amount)
-- VALUES("deposit", 40);

-- INSERT INTO transactions (transaction_type, product, category, vendor, num_items, amount)
-- VALUES ("withdrawl", "milk", "dairy", "Tnuva", 2, 8);


-- INSERT INTO transactions (transaction_type, product, category, vendor, num_items, amount)
-- VALUES ("withdrawl", "cheese", "dairy", "Tnuva", 1, 8);

-- ALTER TABLE transactions
-- ADD COLUMN created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- INSERT INTO transactions (transaction_type, product, category, vendor, num_items, amount)
-- VALUES ("withdrawl", "cream", "dairy", "Tnuva", 1, 3);

-- INSERT INTO transactions (transaction_type, product, category, vendor, num_items, amount)
-- VALUES ("deposit", null, null, null, null, 24);

-- DELETE FROM transactions WHERE transaction_id=200;