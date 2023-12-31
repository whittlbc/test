import {
    Address,
    BeforeAll,
    BigInt,
    Event,
    LiveTable,
    OnEvent,
    Property,
    Spec,
    Timestamp,
} from "@spec.dev/core";

/**
 * All Profiles created on Registry
 */
@Spec({
    uniqueBy: ["profileId", "chainId"],
})
class Profile extends LiveTable {
    @Property()
    profileId: Address;

    @Property()
    nonce: BigInt;

    @Property()
    name: string;

    @Property()
    metadataProtocol: number;

    @Property()
    metadataPointer: string;

    @Property()
    owner: Address;

    @Property()
    anchor: Address;

    @Property()
    creator: Address;

    @Property()
    createdAt: Timestamp;

    // ====================
    // =  Event Handlers  =
    // ====================

    @BeforeAll()
    setCommonProperties(event: Event) {
        this.profileId = event.data.profileId
    }

    @OnEvent("allov2.Registry.ProfileCreated")
    onProfileCreated(event: Event) {
        this.nonce = BigInt.from(event.data.nonce)
        this.name = event.data.name

        const [protocol, pointer] = event.data.metadata
        this.metadataPointer = pointer
        this.metadataProtocol = protocol

        this.owner = event.data.owner
        this.anchor = event.data.anchor
        this.creator = this.currentTransaction.from
        this.createdAt = this.blockTimestamp
    }

    @OnEvent("allov2.Registry.ProfileNameUpdated")
    onProfileNameUpdated(event: Event) {
        this.name = event.data.name
        this.anchor = event.data.anchor
    }

    @OnEvent("allov2.Registry.ProfileMetadataUpdated")
    onProfileMetadataUpdated(event: Event) {
        const [protocol, pointer] = event.data.metadata
        this.metadataPointer = pointer
        this.metadataProtocol = protocol
    }

    @OnEvent("allov2.Registry.ProfileOwnerUpdated")
    onProfileOwnerUpdated(event: Event) {
        this.owner = event.data.owner
    }
}

export default Profile;
