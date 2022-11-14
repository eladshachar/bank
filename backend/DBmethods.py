import pymysql
from transaction import Transaction

def insert_transaction(transaction: Transaction):
    return transaction.amount


def get_categories():
    return "categories"
