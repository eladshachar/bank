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
    return transaction.amount


def get_categories():
    return "categories"


def get_all_transactions():
    try:
        with connection.cursor() as cursor:
            query = 'SELECT * FROM transactions'
            cursor.execute(query)
            result = cursor.fetchall()
            return result
    except Exception as e:
        return e

