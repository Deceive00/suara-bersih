from Bio import pairwise2

def get_title_recommendations(postTitle : str, threads : list):
    ranked_threads = []

    for thread in threads:
        title = thread["threadTitle"]
        similiarity_score = local_alignment(postTitle, title)
        ranked_threads.append((title, similiarity_score))

    ranked_threads.sort(key=lambda x: x[1],reverse=True)  

    return ranked_threads




def local_alignment(query: str, term: str) -> int:
    alignments = pairwise2.align.localxx(query, term, score_only=True)
    if alignments:
        return alignments
    else:
        return 0
