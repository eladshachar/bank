from fastapi import APIRouter, status, HTTPException
from pydantic import BaseModel
from transaction import Transaction
import DBmethods as db


transactions_route = APIRouter()

@transactions_route.get('/transactions', status_code=status.HTTP_200_OK)
def get_transactions(category = None):
    
    try:
        if (category):
            return db.get_transactions_by_category(category)
        else:
            return db.get_all_transactions()
    except:
        print("Failed")
    


@transactions_route.get('/categories', status_code=status.HTTP_200_OK)
def get_categories_breakdown():
    return db.get_categories()


@transactions_route.post('/operations', status_code=status.HTTP_201_CREATED)
def add_transaction(transaction: Transaction):
    return db.insert_transaction(transaction)


@transactions_route.delete('/transactions/{id}', status_code=status.HTTP_200_OK)
def remove_transaction(id: int):
   if db.check_transaction_existence(id) == True:
        db.delete_transaction(id)
        return {"result": f"transaction {id} deleted"}
   else:
        raise HTTPException(status_code=404, detail='transaction does not exist in the database')     
