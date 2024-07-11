from Levenshtein import distance

def get_levenshtein_distance_post(query: str, objects: list):
    ranked_objects = []

    for obj in objects:
        title = obj["postTitle"]
        distance = levenshtein_distance(query, title)
        ranked_objects.append((obj, distance))

    ranked_objects.sort(key=lambda x: x[1])  

    return ranked_objects


def levenshtein_distance(query: str, term: str) -> dict:
    words = term.split(' ')
    distances = []
    for word in words:
        distances.append(distance(query, word))
    return min(distances)

