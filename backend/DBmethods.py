import pymysql
from transaction import Transaction


connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="bank_app",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
)


def insert_transaction(transaction: Transaction):
    try:
        with connection.cursor() as cursor:
            query = f"""
            INSERT INTO transactions (transaction_type, product, category, vendor, num_items, amount)
            VALUES ("{transaction.transaction_type}", "{transaction.product}", "{transaction.category}", "{transaction.vendor}", {transaction.num_items}, {transaction.amount});
            """
            cursor.execute(query)
            connection.commit()
    except Exception as e:
        print("Failed to create transaction")
        return e


def get_categories():
    try:
        with connection.cursor() as cursor:
            query = 'SELECT category, SUM(amount) AS count FROM transactions GROUP BY category;'
            cursor.execute(query)
            result = cursor.fetchall()
            return result
    except Exception as e:
        return e


def get_all_transactions():
    try:
        with connection.cursor() as cursor:
            query = 'SELECT * FROM transactions;'
            cursor.execute(query)
            result = cursor.fetchall()
            return result
    except Exception as e:
        return e

def delete_transaction(id: int):
    try:
        with connection.cursor() as cursor:
            query = f'DELETE FROM transactions WHERE transaction_id={id};'
            cursor.execute(query)
            connection.commit()
    except Exception as e:
        return e