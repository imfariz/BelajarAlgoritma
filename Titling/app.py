from dummy import data
import pandas as pd
import printConverting

def parsing():
    gsheet_id = '16H9UUjosgDvPwQCZdj-sQMGzCIWZW8zYGm4KnnWaGZ8'
    sheet_name = 'REKAP'
    URL = 'https://docs.google.com/spreadsheets/d/{0}/gviz/tq?tqx=out:csv&sheet={1}'.format(gsheet_id, sheet_name)

    dt = pd.read_csv(URL)
    return dt


def convert(nomorAwal, nomorAkhir):
    dt = parsing()
    
    spm = dt["NO SURAT SPP-SPM"]
    paket = dt["URAIAN"]
    rekanan = dt["NAMA REKANAN"]
    nilai = dt["NOMINAL"]
    data = []

    for nomorAwal in range(nomorAkhir):
        if type(spm[nomorAwal]) == type(spm[2]):
            data.append({
                "spm": spm[nomorAwal],
                "cv": rekanan[nomorAwal],
                "paket": paket[nomorAwal],
                "nilai": nilai[nomorAwal]
            })
    return data

# data = convert(43,45)
data = parsing()
print(data["URAIAN"][1])
# printConverting.converting(data)
