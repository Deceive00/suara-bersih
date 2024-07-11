from Levenshtein import distance

def get_levenshtein_distance_post(query: str, objects: list):
    ranked_objects = []

    for obj in objects:
        title = obj["threadTitle"]
        distance = levenshtein_distance(query, title)
        ranked_objects.append((obj, distance))

    ranked_objects.sort(key=lambda x: x[1])  
    sorted_objects = [title for title, _ in ranked_objects]

    return sorted_objects


def levenshtein_distance(query: str, term: str) -> dict:
    words = term.split(' ')
    distances = []
    for word in words:
        distances.append(distance(query, word))
    return min(distances)

