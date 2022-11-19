from fastapi import APIRouter, status, HTTPException
from pydantic import BaseModel
from transaction import Transaction
import DBmethods as db


transactions_route = APIRouter()

@transactions_route.get('/transactions', status_code=status.HTTP_200_OK)
def get_transactions(category = None):
    
    if(category):
        try:
            return db.get_transactions_by_category(category)
        except:
            raise HTTPException(status_code=404, detail="Bad request: category does not exist")
    
    else:
        try:
            return db.get_all_transactions()
        except:
            raise HTTPException(status_code=400, detail="Bad request")
 
    


@transactions_route.get('/categories', status_code=status.HTTP_200_OK)
def get_categories_breakdown():
    return db.get_categories()


@transactions_route.post('/operations', status_code=status.HTTP_201_CREATED)
def add_transaction(transaction: Transaction):
    return db.insert_transaction(transaction)


@transactions_route.delete('/transactions/{id}', status_code=status.HTTP_200_OK)
async def remove_transaction(id: int):
   exist = False
   exist = db.check_transaction_existence(id)
   if exist == True:
        db.delete_transaction(id)
        return {"result": f"transaction {id} deleted"}
   else:
        raise HTTPException(status_code=404, detail='transaction does not exist in the database')     
