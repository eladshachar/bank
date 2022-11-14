from pydantic import BaseModel
from typing import Union

class Transaction(BaseModel):
    transaction_type: str
    product: Union[str, None] = None
    category: Union[str, None] = None
    vandor: Union[str, None] = None
    num_items: Union[str, None] = None
    amount: float