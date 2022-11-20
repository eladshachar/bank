from fastapi import APIRouter, status, HTTPException
import DBmethods as db

categories_route = APIRouter()

@categories_route.get('/categories', status_code=status.HTTP_200_OK)
def get_categories_breakdown():
    return db.get_categories()