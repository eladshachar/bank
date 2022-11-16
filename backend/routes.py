from fastapi import APIRouter, status
from pydantic import BaseModel
from transaction import Transaction
from DBmethods import (
    insert_transaction,
    get_categories,
    get_all_transactions,
    delete_transaction
)

transactions_route = APIRouter()

@transactions_route.get('/transactions', status_code=status.HTTP_200_OK)
def get_transactions(category = None):
    
    try:
        if (category):
            return
        else:
            return get_all_transactions()
    except:
        print("Failed")
    


@transactions_route.get('/categories', status_code=status.HTTP_200_OK)
def get_categories_breakdown():
    return get_categories()


@transactions_route.post('/operations', status_code=status.HTTP_201_CREATED)
def add_transaction(transaction: Transaction):
    return insert_transaction(transaction)


@transactions_route.delete('/transactions', status_code=status.HTTP_200_OK)
def remove_transaction(id: int):
    delete_transaction(id)