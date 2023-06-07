import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._basket = []
        this._orders = []
        this._cpu = []
        this._gpu = []
        this._ram = []
        this._mat = []
        this._vent = []
        this._ssd = []
        this._zvuk = []
        this._pita = []
        this._korpus = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._totalCount = 0
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBasket(basket) {
        this._basket = basket
    }
    setOrders(orders) {
        this._basket = orders
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    setCpu(cpu) {
        this._cpu  = cpu
    }

    setGpu(gpu) {
        this._gpu  = gpu
    }

    setRam(ram) {
        this._ram  = ram
    }

    setKorpus(korpus) {
        this._korpus  = korpus
    }

    setVent(vent) {
        this._vent  = vent
    }
    setSsd(ssd) {
        this._ssd = ssd
    }
    setZvuk(zvuk) {
        this._zvuk  = zvuk
    }

    setPita(pita) {
        this._pita  = pita
    }

    setMat(mat) {
        this._mat  = mat
    }

    get mat() {
        return this._mat
    }

    get vent() {
        return this._vent
    }

    get ssd() {
        return this._ssd
    }

    get zvuk() {
        return this._zvuk
    }

    get pita() {
        return this._pita
    }


    get cpu() {
        return this._cpu
    }

    get gpu() {
        return this._gpu
    }

    get ram() {
        return this._ram
    }

    get korpus() {
        return this._korpus
    }

    get types() {
        return this._types
    }
    get basket() {
        return this._basket
    }
    get orders() {
        return this._orders
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
