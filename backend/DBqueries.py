import pymysql
from transaction import Transaction
from fastapi import HTTPException, status


connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="bank_app",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)


def insert_transaction(transaction: Transaction):
    try:
        connection.ping()
        with connection.cursor() as cursor:
            query = f"""
            INSERT INTO transactions (transaction_type, product, category, vendor, num_items, amount)
            VALUES ("{transaction.transaction_type}", "{transaction.product}", "{transaction.category}", "{transaction.vendor}", {transaction.num_items}, {transaction.amount});
            """
            cursor.execute(query)
            connection.commit()
    except Exception as e:
        print(e)


def get_categories():
    connection.ping()
    with connection.cursor() as cursor:
        query = 'SELECT category As name, SUM(amount) AS sum FROM transactions WHERE transaction_type = "withdrawl" GROUP BY category;'
        cursor.execute(query)
        if(cursor.rowcount == 0):
            raise HTTPException(status_code = status.HTTP_204_NO_CONTENT, detail = "No results to show")
        else:
            result = cursor.fetchall()
            return result



def get_all_transactions():
    connection.ping()
    with connection.cursor() as cursor:
        query = 'SELECT * FROM transactions;'
        cursor.execute(query)
        if(cursor.rowcount == 0):
            raise HTTPException(status_code = status.HTTP_204_NO_CONTENT, detail = "No results to show")
        else:
            result = cursor.fetchall()
            return result



def delete_transaction(id: int):
    try:
        connection.ping()
        with connection.cursor() as cursor:
            query = f'DELETE FROM transactions WHERE transaction_id={id};'
            cursor.execute(query)
            connection.commit()
    except Exception as e:
        print(e)


def get_transactions_by_category(category: str):

    connection.ping()
    with connection.cursor() as cursor:
        query = f'SELECT * FROM transactions WHERE transaction_type = "withdrawl" AND category = "{category}"'
        cursor.execute(query)
        
        if cursor.rowcount == 0:
            raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "Category does not exist")
        else:
            result = cursor.fetchall()
            return result



def check_transaction_existence(id: int):
    try:
        connection.ping()
        with connection.cursor() as cursor:
            query = f'SELECT * FROM transactions WHERE transaction_id = {id}'
            cursor.execute(query)
            
            if cursor.rowcount != 0 :
                return True
            else:
                return False
    except Exception as e:
        print (e)

