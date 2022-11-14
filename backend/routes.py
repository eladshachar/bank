from fastapi import APIRouter, status
from pydantic import BaseModel
from transaction import Transaction
from DBmethods import (
    insert_transaction,
    get_categories
)

transactions_route = APIRouter()

@transactions_route.get('/transactions', status_code=status.HTTP_200_OK)
def get_transactions(category = None):
    
    try:
        if (not category):
            return
    
    except Exception as e:
        return e


@transactions_route.get('/categories', status_code=status.HTTP_200_OK)
def get_categories_breakdown():
    return get_categories()


@transactions_route.post('/operations', status_code=status.HTTP_201_CREATED)
async def add_transaction(transaction: Transaction):
    return {'message': transaction.amount}