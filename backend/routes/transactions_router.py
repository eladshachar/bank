from fastapi import APIRouter, status, HTTPException
from transaction import Transaction
import DBqueries as db


transactions_route = APIRouter()

@transactions_route.get('/transactions', status_code=status.HTTP_200_OK)
def get_transactions(category = None):
    
    if(category):
        return db.get_transactions_by_category(category)
    else:
        try:
            return db.get_all_transactions()
        except:
            raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail="Bad request: transactions were not fetched")

    

@transactions_route.post('/transactions', status_code=status.HTTP_201_CREATED)
def add_transaction(transaction: Transaction):

    if transaction.amount > 5000:
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE, detail="Transactions larger than 5000$ are not allowed")
    else:
        db.insert_transaction(transaction)    


@transactions_route.delete('/transactions/{id}', status_code=status.HTTP_200_OK)
async def remove_transaction(id: int):
   exist = False
   exist = db.check_transaction_existence(id)
   if exist == True:
        db.delete_transaction(id)
        return {"result": f"transaction {id} deleted"}
   else:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail='transaction does not exist in the database')     
